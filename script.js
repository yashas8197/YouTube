const CLIENT_ID = '356903753367-skqlbgop0vi2upp142lq1rjuescdpnr7.apps.googleusercontent.com'

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

// const SCOPES = 'https://www.googleapis.com/auth/calendar';
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const ChannelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');

const defaultChannel = 'Tanay Pratap'
//Load Auth To Library
function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
  }

//Init API client library and set up sign in listener
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(() => {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
     
}

//Update Signin state changes
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
      content.style.display = 'block';
      videoContainer.style.display = 'block';
      makeApiCall(defaultChannel);
    } else {
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
      content.style.display = 'none';
      videoContainer.style.display = 'none';
    }
  }

//Handle Login

function handleAuthClick(event) {
 gapi.auth2.getAuthInstance().signIn();
}   

//Handel Logout
function handleSignoutClick(event) {
 gapi.auth2.getAuthInstance().signOut();
}

//Get channel from API
function makeApiCall(channel){
    console.log(channel)
}

