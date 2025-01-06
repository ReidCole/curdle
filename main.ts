const url = Deno.args[0];
const res = await fetch(url);
if (res.status >= 400) {
  console.error(`FETCH FAILED WITH STATUS: ${res.status} - ${url}

SERVER RESPONSE:

${await res.text()}
`);
}
