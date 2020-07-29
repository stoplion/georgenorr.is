import {Application} from 'stimulus';
import {definitionsFromContext} from 'stimulus/webpack-helpers';
import '../styles/index.scss';
import './controllers/export_pdf_controller.js';

const application = Application.start();
const context = require.context('./controllers', true, /\.js$/);
application.load(definitionsFromContext(context));
