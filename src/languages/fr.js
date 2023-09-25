import BaseLanguage from '../base.js'

const abbreviations = new Set([
  'a.c.n',
  'a.m',
  'al',
  'ann',
  'apr',
  'art',
  'auj',
  'av',
  'b.p',
  'boul',
  'c.-à-d',
  'c.n.s',
  'c.n',
  'c.p.i',
  'c.q.f.d',
  'c.s',
  'ca',
  'cf',
  'ch.-l',
  'chap',
  'co',
  'contr',
  'dir',
  'e.g',
  'e.v',
  'éd',
  'env',
  'etc',
  'ex',
  'fasc',
  'fém',
  'fig',
  'fr',
  'hab',
  'i.e',
  'ibid',
  'id',
  'inf',
  'l.d',
  'lib',
  'll.aa.ii',
  'll.aa.rr',
  'll.aa.ss',
  'll.aa',
  'll.ee',
  'll.mm.ii.rr',
  'll.mm',
  'loc.cit',
  'ltd',
  'masc',
  'mm',
  'ms',
  'n.b',
  'n.d.a',
  'n.d.l.r',
  'n.d.t',
  'n.d',
  'n.p.a.i',
  'n.s',
  'n/réf',
  'nn.ss',
  'p.c.c',
  'p.ex',
  'p.j',
  'p.s',
  'pl',
  'pp',
  'r.-v',
  'r.a.s',
  'r.i.p',
  'r.p',
  's.a.i',
  's.a.r',
  's.a.s',
  's.a',
  's.e',
  's.m.i.r',
  's.m',
  's.s',
  'sec',
  'sect',
  'sing',
  'sq',
  'sqq',
  'ss',
  'suiv',
  'sup',
  'suppl',
  't.s.v.p',
  'tél',
  'vb',
  'vol',
  'vs',
  'x.o',
  'z.i'

])

export default class French extends BaseLanguage {
  static abbreviations = abbreviations
}
