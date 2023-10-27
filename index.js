const gifts = ["teddy bear", "drone", "doll"];

function writeCards(nameList, eventName)
{
    const messages = [];

    for (let i = 0; i < nameList.length; i++)
    {
        messages[i] = `Thank you, ${nameList[i]}, for the wonderful ${eventName} gift!`
    }

    return messages;
}

function countDown(x)
{
    let num = x;
    while (num >= 0)
    {
        console.log(num);
        num--;
    }
}