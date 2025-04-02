const ExcelJs=require('exceljs');

async function excelTest(searchText,replacetext,filepath){

   
const workbook=new ExcelJs.Workbook();
await workbook.xlsx.readFile(filepath)

const worksheet=workbook.getWorksheet('Sheet1')

const output=await readExcel(worksheet,searchText);

const cell=worksheet.getCell( output.row,output.column);
cell.value=replacetext;
await workbook.xlsx.writeFile(filepath);

}


async function readExcel(worksheet,searchText){

    let output ={row:-1,column:-1};
worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,cellNumber)=>{

        if(cell.value===searchText){

        console.log(`row ${rowNumber} cell ${cellNumber} =${cell.value}`);

        output.row=rowNumber;
        output.column=cellNumber;

        }

        
    })

})

return output;

}

excelTest("Mango","Samsung","C:/Users/omgoyal/CypressAutomation/cypress/fixtures/ExcelDemoTest.xlsx");