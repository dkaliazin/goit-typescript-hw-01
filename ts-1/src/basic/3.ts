/*Створіть змінну, яка може містити або рядок, 
або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 
'enable' або 'disable' (literal type).*/
let unionType: string | number;
unionType = 'b';
unionType = 1;
type LiteralType = 'enable' | 'disable';
let literalTypeVar: LiteralType;
literalTypeVar = 'disable';