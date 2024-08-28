function encript()
{
    //limpiar caja de texto
    document.getElementById("desaparecer").style.display="none";
    document.querySelector('.mostrar').removeAttribute('hidden' );
   

    //capturar el texto en el textarea
    let text1=document.getElementById('text1');
    console.log(text1.value);

    //mostrarlo en el card
    let text2=document.querySelector('.mostrar');

    let resultado=regex1(text1.value);

    text2.innerHTML=resultado;
  
}


function regex1(textomod)
{   
    const regex= /[aeiou]/gi;

    const sustituciones=
{
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};



    return textomod.replace(regex, (match) => sustituciones[match.toLowerCase()]||match);
    
}




function uncript()
{
    let text1=document.querySelector('.mostrar')
  

    let resultado=regex2(text1.innerHTML);
    console.log(resultado);

    let nuevo=document.querySelector('.mostrar')
    nuevo.innerHTML=resultado;


}



function regex2(textomod)
{
    const regex= /ai|enter|imes|ober|ufat/gi;

    const sustituciones=
{
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};



    return textomod.replace(regex, (match) => sustituciones[match.toLowerCase()]||match);

}
