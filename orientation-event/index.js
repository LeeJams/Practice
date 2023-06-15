let stepCount = 0;
let previousBeta = null;
let isStepDetected = false;

// DeviceOrientationEvent를 감지하는 함수
function handleDeviceOrientation(event) {
  const { beta } = event;

  // 이전 beta 값이 null인 경우 초기화
  if (previousBeta === null) {
    previousBeta = beta;
    return;
  }

  // 이전 값과 현재 값의 차이 계산
  const deltaBeta = beta - previousBeta;

  // 걸음을 감지하는 조건 설정
  if (!isStepDetected && deltaBeta > 10) {
    isStepDetected = true;
  } else if (isStepDetected && deltaBeta < -10) {
    isStepDetected = false;
    stepCount++;
  }

  previousBeta = beta;
}

// DeviceOrientationEvent 이벤트 리스너 등록
window.addEventListener("deviceorientation", handleDeviceOrientation);

// 걸음 수를 측정하는 함수 호출
function startStepCounting() {
  // 걸음 수 초기화
  stepCount = 0;

  // 이전 beta 값 초기화
  previousBeta = null;

  // 걸음 수 측정을 위해 이벤트 리스너 등록
  window.addEventListener("deviceorientation", handleDeviceOrientation);
}

// 걸음 수 측정을 멈추는 함수 호출
function stopStepCounting() {
  // 걸음 수 측정을 위한 이벤트 리스너 제거
  window.removeEventListener("deviceorientation", handleDeviceOrientation);
}

// 걸음 수 출력
function displayStepCount() {
  console.log("걸음 수:", stepCount);
}

// 걸음 수 측정 시작
startStepCounting();

// 10초 후 걸음 수 측정 멈춤 및 출력
setTimeout(() => {
  stopStepCounting();
  displayStepCount();
}, 10000);
