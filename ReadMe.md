Prerequisite set up to run the project :

1.Visual Studio Code
2.Node JS , version :v16.15.0
3.Project

Node js v16.15.0 is compatiable with windows 8 and higher versions.

Steps to import the project in your VS code:

1.Navigate to git hub and clone the project as mentioned below-
  a.Open the URL in browser https://github.com/sushmawankhede/AutomationDemoProject
  b.Clone the project : Click on Code button , copy the URL https://github.com/sushmawankhede/AutomationDemoProject.git
  c.Navigate to git bash , move to workspace folder(ex : cd workspace) and type this command
     git clone https://github.com/sushmawankhede/AutomationDemoProject.git
  d.Wait until done
  e.Naviagete to VS code ->Click on File menu->Open Folder ->Select AutomationDemoProject

Step to run the project :

1.Run npm install - to download dependencies
2.To run each feature file , mention the file to run under Specs(feature file) and CucuOption(Steps file) in wdio.conf.ts as shown below-

under Specs section:
 './src/features/**/home.feature'

under CucuOpt section:
    require: ['./src/steps/home.steps.ts']

3.In VS code terminal run the project with command : npm test