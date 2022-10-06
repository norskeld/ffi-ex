import { dlopen, suffix, ptr, FFIType } from "bun:ffi";

const {
  symbols: { spawn: spawnSyncFFI },
} = dlopen(`./ffi/target/release/libffi.${suffix}`, {
  spawn: {
    args: [FFIType.pointer],
    returns: FFIType.void,
  },
});

function spawnSync(command: string) {
  const view = new Uint8Array(Buffer.from(command));
  const arg = ptr(view);

  spawnSyncFFI(arg);
}

function main(proc: Process) {
  const command = proc.argv.slice(2).join(" ");

  console.log(`Spawning... ${command}`);
  console.log(`...`);

  spawnSync(command);
}

main(process);
