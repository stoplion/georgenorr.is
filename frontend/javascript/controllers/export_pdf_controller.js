import {Controller} from 'stimulus';
import html2pdf from 'html2pdf.js';
// import htmlToPdfmake from 'html-to-pdfmake';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import PDFDocument from 'pdfkit';
// import blobStream from 'blob-stream';

export default class extends Controller {
  download(e) {
    debugger;
    var element = document.querySelector('body');
    html2pdf(element);
    // e.preventDefault();
    // const doc = new PDFDocument();
    // const stream = doc.pipe(blobStream());
    // doc.end();
    // stream.on('finish', () => {
    //   debugger;
    //   // get a blob you can do whatever you like with
    //   const blob = stream.toBlob('application/pdf');
    //   // or get a blob URL for display in the browser
    //   const url = stream.toBlobURL('application/pdf');
    //   foo(url);
    // });
  }

  foo(url) {
    // debugger;
    // const a = document.createElement('a');
    // document.body.appendChild(a);
    // a.href = url;
    // a.download = 'hello';
    // a.click();
    // window.URL.revokeObjectURL(url);
  }
}
