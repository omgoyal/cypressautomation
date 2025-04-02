const { defineConfig } = require("cypress");
const ExcelJs=require('exceljs');
const cucumber =require('cypress-cucumber-preprocessor').default
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");


const fs = require('fs');

const sqlServer = require('cypress-sql-server');
const excelToJson = require("convert-excel-to-json");



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



module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter:'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  env:{
    url:"https://rahulshettyacademy.com"
  },

  retries: {
    runMode: 1,
    
    },
  projectId: "9tj2s8",


  

  


  


  e2e: {
    experimentalStudio:true,



   
    





    async setupNodeEvents(on, config) {

    config.db= {
    userName: "emp-portal-qa-app-owner",
    password: "gwG$s3OWsU%f",
    server: "employee-portal-qa.database.windows.net",
    options: {
        database: "employee-portal-qa",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}



      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      
      await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  console.log("Loading SQL Server Plugin...");
  const tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  console.log("SQL Server Plugin Loaded Successfully");
  // Make sure to return the config object as it might have been modified by the plugin.
  
  on('task',{
    excelToJsonConvertor(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
    });
   return result;
    }
  
    
  })



  on ('task',{

    async excelTest(searchText,replacetext,filepath){

   
      const workbook=new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filepath)
      
      const worksheet=workbook.getWorksheet('Sheet1')
      
      const output=await readExcel(worksheet,searchText);
      
      const cell=worksheet.getCell( output.row,output.column);
      cell.value=replacetext;
      await workbook.xlsx.writeFile(filepath);
      
      }



  })


      return config;

    },

   



    specPattern:'cypress/Integration/examples/*.js',
    //specPattern:"cypress/Integration/examples/BDD/*.feature",
    screenshotsFolder: 'cypress/screenshots',
    video: true,  // ✅ Enable video recording
    videosFolder: "cypress/videos"
  },



  
});
