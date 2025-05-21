feedbacks:

1. for this getyear funtion():-

function getYear(format, date) {
  switch (format) {
    case "yyyy-mm-dd":
      return +(date[0] + date[1] + date[2] + date[3]);
    case "mm-dd-yyyy":
      return +(date[6] + date[7] + date[8] + date[9]);
    case "dd-mm-yyyy":
      return +(date[6] + date[7] + date[8] + date[9]);
  }
}

good thing: it is getting integer by carefully putting circular brackets.

bad thing: 1.getYear("mm-dd-yyyy","56-45-784a");  
           in this case it will gave NaN.

           2.> getYear("mm-dd-yyy","56-48-6863");
           in this case if all this three formats are not valid it will give 
           undefinded because it is not returning anything in this case.
           so first we need to check valid format instead of getting year,month 
           and date.

2.


