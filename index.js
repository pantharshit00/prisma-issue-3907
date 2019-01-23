const { prisma  } = require('./generated/prisma-client')

;(async ()=>{
   const foo = await prisma.web({ id: 'cjr8g5yut00fl0778cr8yxzu7' });
   console.log(foo);

})()
