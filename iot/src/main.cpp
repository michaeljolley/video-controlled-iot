#include "Particle.h"

void setup();
void loop();
void init();

int leftBlink(String arg);
int rightBlink(String arg);
int blink(String arg);
int mouthMove(String arg);

Servo leftEyeBrowServo;
Servo rightEyeBrowServo;
Servo mouthServo;

int _leftEyeBrow = D2;
int _rightEyeBrow = D4;
int _mouth = D6;

int _leftEyeBrowOpenState = 150;
int _leftEyeBrowClosedState = 60;

int _rightEyeBrowOpenState = 60;
int _rightEyeBrowClosedState = 150;

int _mouthOpenState = 60;
int _mouthClosedState = 130;

void setup()
{
    leftEyeBrowServo.attach(_leftEyeBrow);
    rightEyeBrowServo.attach(_rightEyeBrow);
    mouthServo.attach(_mouth);

    Particle.function("leftBlink", leftBlink);
    Particle.function("rightBlink", rightBlink);
    Particle.function("blink", blink);
    Particle.function("mouth", mouthMove);

    init();
}

void loop()
{
}

// Open all the eyes, look straight ahead and close mouth
void init()
{
    leftEyeBrowServo.write(_leftEyeBrowOpenState);
    rightEyeBrowServo.write(_rightEyeBrowOpenState);
    mouthServo.write(_mouthClosedState);
}

int leftBlink(String arg)
{
    leftEyeBrowServo.write(_leftEyeBrowClosedState);
    delay(250);
    leftEyeBrowServo.write(_leftEyeBrowOpenState);
    return 0;
}

int rightBlink(String arg)
{
    rightEyeBrowServo.write(_rightEyeBrowClosedState);
    delay(250);
    rightEyeBrowServo.write(_rightEyeBrowOpenState);
    return 0;
}

int blink(String arg)
{
    rightEyeBrowServo.write(_rightEyeBrowClosedState);
    leftEyeBrowServo.write(_leftEyeBrowClosedState);
    delay(250);
    rightEyeBrowServo.write(_rightEyeBrowOpenState);
    leftEyeBrowServo.write(_leftEyeBrowOpenState);
    return 0;
}

int mouthMove(String arg)
{
    mouthServo.write(_mouthOpenState);
    delay(250);
    mouthServo.write(_mouthClosedState);
    return 0;
}
