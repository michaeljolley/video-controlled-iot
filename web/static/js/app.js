var opentok_api_key;
var opentok_session_id;
var opentok_token;

// See the config.js file.
if (OPENTOK_API_KEY && OPENTOK_SESSION_ID && OPENTOK_TOKEN) {
  opentok_api_key = OPENTOK_API_KEY;
  opentok_session_id = OPENTOK_SESSION_ID;
  opentok_token = OPENTOK_TOKEN;

  initializeSession();
} else {
  alert(
    "Failed to get configuration variables. Make sure you have updated the config.js file."
  );
}

// Handling all of our errors here by logging them to the console
function handleError(error) {
  if (error) {
    console.log(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(opentok_api_key, opentok_session_id);

  // Create a publisher
  var publisher = OT.initPublisher(
    null,
    {
      insertDefaultUI: false,
    },
    handleError
  );
  publisher.on("videoElementCreated", function (event) {
    const video = event.element;
    video.id = "gobyebye";
    const pubEl = document.getElementById("publisher");
    pubEl.appendChild(video);

    main();
  });

  // Connect to the session
  session.connect(opentok_token, function (error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

async function main() {
  // Load the MediaPipe facemesh model.
  const model = await facemesh.load();

  // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain an
  // array of detected faces from the MediaPipe graph.
  const predictions = await model.estimateFaces(
    document.getElementById("maryjo")
  );

  if (predictions.length > 0) {
    /*
    `predictions` is an array of objects describing each detected face, for example:

    [
      {
        faceInViewConfidence: 1, // The probability of a face being present.
        boundingBox: { // The bounding box surrounding the face.
          topLeft: [232.28, 145.26],
          bottomRight: [449.75, 308.36],
        },
        mesh: [ // The 3D coordinates of each facial landmark.
          [92.07, 119.49, -17.54],
          [91.97, 102.52, -30.54],
          ...
        ],
        scaledMesh: [ // The 3D coordinates of each facial landmark, normalized.
          [322.32, 297.58, -17.54],
          [322.18, 263.95, -30.54]
        ],
        annotations: { // Semantic groupings of the `scaledMesh` coordinates.
          silhouette: [
            [326.19, 124.72, -3.82],
            [351.06, 126.30, -3.00],
            ...
          ],
          ...
        }
      }
    ]
    */

    for (let i = 0; i < predictions.length; i++) {
      const keypoints = predictions[i].scaledMesh;

      // Log facial keypoints.
      for (let i = 0; i < keypoints.length; i++) {
        const [x, y, z] = keypoints[i];

        const dt = new Date();

        console.log(`${dt}: Keypoint ${i}: [${x}, ${y}, ${z}]`);
      }
    }
  }
}
