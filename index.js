// const argv = process.argv[2];
import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];

const langCode = franc(input, { minLength:input.length });
const language = langs.where("3", langCode);
console.log(`「${language.name}」でしょうか？`.green);
