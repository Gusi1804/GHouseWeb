import { downloadZip } from "https://cdn.jsdelivr.net/npm/client-zip/index.js"

async function zipFiles(urls_array) {
    // define what we want in the ZIP
    //const code = await fetch("https://raw.githubusercontent.com/Touffy/client-zip/master/src/index.ts")
    //const files_array = await downloadFiles(urls_array);
    const files_array = [];

    const file1 = await fetch(urls_array[0]);

    //const intro = { name: "intro.txt", lastModified: new Date(), input: "Hello. This is the client-zip library." }

    // get the ZIP stream in a Blob
    const blob = await downloadZip([file1]).blob()

    // make and click a temporary link to download the Blob
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "test.zip"
    link.click()
    link.remove()

    // in real life, don't forget to revoke your Blob URLs if you use them
}

async function downloadFiles(urls_array) {
    var files_array = [];

    for (let i = 0; i < urls_array.length; i++) {
        //console.log(facturas[i]);
        const file = await fetch(urls_array[i]);
        files_array.push(file)
    }

    return files_array
}