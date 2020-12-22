const GenerateNum=(text:string,output='0')=>{
        switch (text){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
                if(output.length<=16){
                    if(text==='.'){
                        if(output.indexOf('.')!==-1){
                            return output;
                        }else{
                            output+=text;
                            return output;
                        }
                    }else if (output==='0'){
                        return text;
                    }else{
                        output+=text;
                        return output;
                    }
                }else{
                    return output;
                }
            case '删除':
                if(output.length===1||output.length===0){
                    return '0';
                }else{
                    output=output.slice(0,output.length-1);
                    return output;
                }
            case '清空':
                return '0';
            default:
                return '0';
        }
};
export {GenerateNum};