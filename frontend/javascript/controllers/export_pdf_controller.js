import {Controller} from 'stimulus';
import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';

export default class extends Controller {
  bar(e) {
    e.preventDefault();
    const doc = new PDFDocument();
    const stream = doc.pipe(blobStream());
    doc.end();

    stream.on('finish', () => {
      debugger;
      // get a blob you can do whatever you like with
      const blob = stream.toBlob('application/pdf');

      // or get a blob URL for display in the browser
      const url = stream.toBlobURL('application/pdf');
      foo(url);
    });
  }

  foo(url) {
    debugger;
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = 'hello';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
