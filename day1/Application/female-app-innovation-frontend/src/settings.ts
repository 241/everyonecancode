const imageApiUrl = "https://fotobackendtest.azurewebsites.net";
const faceApiKey = process.env.VUE_APP_FACE_API_KEY;
const speechApiKey =
  process.env.VUE_APP_SPEECH_API_KEY || "d349139ec5084a5b816e99a4a01e02e7⏎";
const faceApiEndpoint =
  "https://female-tech-gen-face-api.cognitiveservices.azure.com/";

export { imageApiUrl, faceApiKey, faceApiEndpoint, speechApiKey };
