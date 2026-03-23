const raw = $input.first().json.message.content;
const code = raw.startsWith("=") ? raw.slice(1) : raw;
return [{ json: { code: code } }];