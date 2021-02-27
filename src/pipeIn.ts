/**
 * Consume stdin stream and resolve
 *
 * @return data flowed in
 */
export const pipeIn = (): Promise<string> => {
  return new Promise(resolve => {
    let data = '';

    process.stdin.on('data', function (chunk) {
      data += chunk;
    });

    process.stdin.on('end', function () {
      resolve(data);
    });
  });
};
