import Rebase from 're-base'
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyClBBNabi0ZHtPC-zMsMCpgiCVrYp1rVIE",
    authDomain: "reactjs-57ef0.firebaseapp.com",
    databaseURL: "https://reactjs-57ef0.firebaseio.com",
    projectId: "reactjs-57ef0",
    storageBucket: "reactjs-57ef0.appspot.com",
    messagingSenderId: "266047669117"
}

const app = firebase.initializeApp(config)
const db = firebase.database(app)

const base = Rebase.createClass(db)

export const providers = {
    facebook: new firebase.auth.FacebookAuthProvider(),
    google: new firebase.auth.GoogleAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
    github: new firebase.auth.GithubAuthProvider()
}

export const auth = firebase.auth()

export default base