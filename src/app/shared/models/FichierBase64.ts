export class TypeBase64{
    extension: string;
    type: string;
    base64: string;
}

export class ExtratBase64{


    public extract(img64) {
       const extrat = {
            "extension":img64.split(",")[0].split(";")[0].split("/")[1],
            "type": img64.split(",")[0].split(";")[0].split("/")[0].split(":")[1],
            "base64":img64.split(",")[1]
        }
        return extrat;
    }
}