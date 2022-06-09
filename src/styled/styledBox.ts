import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { fontFamily, fontSize, height } from "@mui/system";

export const CategoryLabelBox = styled(Box)(({theme})=>({


width: "90px",
 height:"38px",
 fontSize:".8em",
 fontWeight:"800",
color:"white",
borderRadius:3,
display:"flex",
justifyContent:"center",
alignItems:"center",
fontFamily:"Oswald",
textTransform:"uppercase",
 marginLeft:"20px"

}))

export const TodayLabelBox = styled(CategoryLabelBox)(({theme})=>({


position:"absolute",
top:"2%",
left:"1%",
zIndex:"555",
height:"28px",
width:"70px",
 backgroundColor:`${theme.palette.primary.main}`
    
    }))


export const HorizontalLineBox = styled(Box)(()=>({


    width: "60%",
     height:"4px",
     position:"absolute",
     top:"90%",
    left:"8%",

    
    }))


    

        export const AvatarBox= styled(Box)(()=>({

               height:"30px",
               width:"30px",
               borderRadius:"50%",
               marginLeft:"2",
               marginRight:"2"
        }))
    

export const OverlayBox = styled(Box)(()=>({
    position: "absolute",
    top: "0px",
    left: "0px",
    transition: "0.4s all ease-in-out",
    borderRadius: "2px",

    opacity:0,
    "&:hover": {
        opacity: 1,
 
      }

}))


export const OverlayTodayBox = styled(OverlayBox)(()=>({


    width: "100%",
    height:"100%",
    borderRadius: "8px",

  
    "&:hover": {
        height:"67%",
      backgroundColor:"rgba(96, 89, 85,.5)",
    },
  

    
    }))

        export const OverlayOpinionBox = styled(OverlayBox)(()=>({


            width: "100%",
            height:"62.5%",
          
         
            "&:hover": {
              
                backgroundColor: "rgba(194, 150, 83,0.5)",
        color:"#C29653"      
              }
        }))


        export const OverlaySportBox = styled(OverlayBox)(()=>({


            width: "56.5%",
            height:"100%",

         
            "&:hover": {
             
                backgroundColor: "rgba(100,0,0,0.5)"
           
              }
        }))


        export const OverlayLifestyleBox = styled(OverlayBox)(()=>({


            width: "100%",
            height:"57.2%",
           
         
            "&:hover": {
              
                backgroundColor: "rgba(34, 184, 179, 0.5)"
           
              }
        }))


        
        export const OverlayCultureBox = styled(OverlayLifestyleBox)(()=>({


          
         
            "&:hover": {
            
                backgroundColor: "rgba(0,113,252,0.5)"
           
              }
        }))