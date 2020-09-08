
const varJ1 = $('.var1JS');
const varJ2 = $('.var2JS');
const varJ3 = $('.var3JS');
const varJ4 = $('.var4JS');
const varJ5 = $('.var5JS');
const varJ6 = $('.var6JS');
const speachJ = $('.speachJS');


const btnText1 = $('.btnText');
const sendText1 = $('.sendText');
const rightText = $('.text1');

const startText = {
    "text": [
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
    ]};


btnText1.click(function() {
    rightText.html(startText.text);
});

sendText1.click(function() {
    const var1 = varJ1.val();
    const var2 = varJ2.val();
    const var3 = varJ3.val();
    const var4 = varJ4.val();
    const var5 = varJ5.val();
    const var6 = varJ6.val();
    const speach = speachJ.val();

    const lastText = {"text": [
    `Жили-были ${var1} да ${var2}`,
    `Была у них ${var3}`,
    `Снесла ${var3} ${var4}, не простое - золотое`,
    `- ${var1} бил, бил - не разбил`,
    `- ${var2} била, била - не разбила`,
    ` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
    ` ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,` ${speach}`
    ]};
    rightText.html(lastText.text);
});







