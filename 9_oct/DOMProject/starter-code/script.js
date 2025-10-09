//1]document.getElementByTag

const images=document.getElementsByTagName('img')

// const images1=document.images

// const subheadings=document.getElementsByTagName('h2') 

// subheadings[0].innerText='Itview Solution Pune' //cannot apply the apply HTML using innerText
// subheadings[1].innerHTML='<i> FrontEnd Development Using React </i>' //can apply the html to text 

// images[0].src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fnature-wallpaper&psig=AOvVaw2vzOtV24DSlolR8ZcEVfMN&ust=1760015093074000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPCV6qbVlJADFQAAAAAdAAAAABAK'

//2] document.getElementsByClassName

//  const subheadings1=document.getElementsByClassName('subheading')

//  subheadings1[0].innerHTML='HELLO Programmer'
//  subheadings1[1].innerHTML='Hello atharva'

// 3] document.getElementById
// const cssimage=document.getElementById('img2')

// document.getElementById('img1').src=''

// 4]document.querySelector
const para=document.querySelector('.paragraphs')

const paras=document.querySelectorAll('.paragraphs')

const images2=document.querySelectorAll('.imagesclass')

const imagurl=['https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
'https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_960_720.jpg',
'https://images.pexels.com/photos/1575861/pexels-photo-1575861.jpeg?cs=srgb&dl=pexels-trayproductions-1575861.jpg&fm=jpg']

// images2[0].src=imagurl[0]
// images2[1].src=imagurl[1]
// images2[2].src=imagurl[2]

// for(let i=0;images2.length;i++)
// {
//     images2[i].src=imagurl[i]
// }

// document.querySelectorAll('imagesclass').forEach((ele,index)=>{
//     ele.src=imagurl[index]
// })

//9oct
// const text1=document.querySelector('p').innerText
// const text2=document.querySelector('.paragraphs').innerHTML
// const text3=document.querySelector('#para1').textContent
// console.log(tex1)
// console.log(text2)
// console.log(text3)

document.querySelector("#para1").innerHTML='<h4>Java Script Classes</h4>'

const firstimg= document.querySelector('[session]').attributes.class
const attaributevalue=document.querySelector('[session]').getAttribute('alt')

document.querySelector('ul').setAttribute('id','unorederlist1')