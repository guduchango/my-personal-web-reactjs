

export class InfoWeb {

    constructor(info){
        this.info = info;
    }

    getEducationInfo(){
        return this.info['education']
    }

    getProjectInfo(){
        return this.info['project']
    }
}