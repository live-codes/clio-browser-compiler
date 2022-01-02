import { Dispatcher } from "clio-rpc/dispatcher.js";
import { Executor } from "clio-rpc/executor.js";
import { Server } from "clio-rpc/transports/web-worker/index.js";
import { getCPUCount } from "clio-run/src/lib/web-cpu.js";
import { run } from "clio-run/src/index.js";
import { getModule } from "./common.js";

function getWorkerURL(url) {
  const content = `importScripts("${url}");`;
  return 'data:text/javascript;base64,' + btoa(content);
}

export const exec = async (code, workerUrl) => {
  const numCPUs = await getCPUCount();
  const main = await getModule(code);
  const encoded = encodeURIComponent(code.replace(/%/g, "~~mod~~"));

  const dispatcher = new Dispatcher();
  const serverTransport = new Server();
  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(`${getWorkerURL(workerUrl)}#${encoded}`);
    serverTransport.addWorker(worker);
  }
  dispatcher.addTransport(serverTransport);
  return dispatcher.expectWorkers(numCPUs).then(async () => {
    const clientTransport = serverTransport.getTransport();
    const executor = new Executor(clientTransport);
    await run(main, { executor }, { noExit: true });
  });
};
