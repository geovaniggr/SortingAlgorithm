const bubbleData = require('./DataBubble');
const quickData = require('./DataQuick');

const reducer = (acumulador, valor) => acumulador + valor;
const somatorio = array => array.reduce(reducer);
const converterUnidade = (array, escala) => array.map( element => escala(element.y));
const media = array => somatorio(array) / array.length;

const toSeg = element => element / 1e+9;
const toMs = element => element / 1e+6;

const bubble1 = converterUnidade(bubbleData.bubble1k, toSeg)
const bubble10 = converterUnidade(bubbleData.bubble10k, toSeg);
const bubble100 = converterUnidade(bubbleData.bubble100k, toSeg);
const quick1 = converterUnidade(quickData.quick1K, toSeg);
const quick10 = converterUnidade(quickData.quick10K, toSeg);
const quick100 = converterUnidade(quickData.quick100K, toSeg);
