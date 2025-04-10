export type ButtonProps = {
 label : string;
 iconURL : string; 
}

export type ShoeCardProps = {
    imgURL : ShoeProps;
    changeBigShoeImage : (bigImgURL:string) => void;
    bigShowImg : string
    }
    
export type ShoeProps= {
        thumbnail: string,
        bigShoe : string,
    }