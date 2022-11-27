const fs = require('fs');
const { delimiter } = require('path');
const path = require('path');

class Directory{
    constructor(){
        this._dir = 'docs';
        this._path = __dirname;
        this.createDocsDir();
    }
    createDocsDir(){
        this._path = path.join(this._path, this._dir);
        if(!fs.existsSync(this._dir)){
            fs.mkdirSync(this._dir);
        }
    }
    getPath(){
        return this._path;
    }
    getShortPath(){
        let paths = path.parse(this._path);
        let delimeter = '/';
        if(paths.dir.indexOf(delimeter) < 0){
            delimeter='\\';
        }
        return `${paths.root}...${delimeter}${paths.name}`;
    }
    getFilesInDir(){
        const files = fs.readdirSync(this._path);
        let n = 0;
        console.log(
            `
            ====================================
            Ubicación: ${this.getShortPath()}
            ====================================`
        )
        files.forEach((file =>{
            if(file!= '.Ds_Store'){
                console.log(`   ${file}`);
                n++;
            }
        }))
    }
}
module.exports = Directory;