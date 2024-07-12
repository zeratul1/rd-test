import { encrypt } from './crypto'

(async () => {
  const input = process.argv.slice(2)[0];
  if (input) {
    const resp = await encrypt(input);
    process.stdout.write(resp);
  } else {
    process.stdout.write('');
  }
})();
