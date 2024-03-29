import styled, { keyframes } from 'styled-components';
import theme from 'theme';

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9990;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -ms-transform: translate3d(-50%, -50%, 0);
  -o-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  width: 50px;
  height: 50px;
  pointer-events: none;
`;

export const SpinnerText = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  -ms-transform: translate3d(-50%, 0, 0);
  -o-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  display: block;
  color: ${theme.colors.text};
`;

const part1Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(-900deg);
  }
  85% {
    transform: rotate(-3200deg);
  }
  100% {
    transform: rotate(-2000deg);
  }
`;

export const SpinnerPart1 = styled.img`
  position: absolute;
  width: 80%;
  height: 80%;
  margin: 10%;
  animation-iteration-count: infinite;
  animation-name: ${part1Animation};
  animation-duration: 6s;
`;

SpinnerPart1.defaultProps = {
  src:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODFweCIgaGVpZ2h0PSI1MXB4IiB2aWV3Qm94PSIwIDAgODEgNTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pbWdfMDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSG9tZXBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpbWdfMDEiIGZpbGw9IiNGMDkyMzUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MC45MjYyOTYxLC0xNC4wOTA3MzkgQzUyLjc4ODU1MDEsLTE0LjA5MDczOSA2MS4yNzk1MjcxLC04LjkwNDk5MDE1IDY0LjkxMjc4ODMsLTYuMDkwNzM5MDUgQzY2LjM3NjQ0NDQsLTQuOTU3MDIwNDUgNjYuMTU3MTAyLC0yLjEwMjM3MjE0IDY0LjkxMjc4ODMsLTAuNzcxODgyMjMxIEM2My42Njg0NzQ2LDAuNTU4NjA3Njc5IDYxLjA2MDEwMzksMC45MDYyMjI3NTIgNTkuNDA5OTM2NCwtMC4yMDk2NTcxNzcgQzU3LjQzNzMxNDQsLTEuNTQzNTg3OTEgNTAuOTU0ODg4NSwtNi4wOTA3MzkwNSA0MC45MjYyOTYxLC02LjA5MDczOTA1IEMzMC44OTc3MDM4LC02LjA5MDczOTA1IDI0LjM0NjkwNzcsLTEuNTMyNzY1NDkgMjIuNDQ2NDAwOSwtMC4yMDk2NTcxNzcgQzIwLjYxNDEzNjksMS4wNjU5NDEzMiAxOC4wOTU2MjA4LDAuNDE2NzMyMTA2IDE2LjkxNDEwODYsLTAuNzcxODgyMjMxIEMxNS43MzI1OTY0LC0xLjk2MDQ5NjU3IDE1LjM1Nzc5ODgsLTQuOTM4MjQ5ODQgMTYuOTE0MTA4NiwtNi4wOTA3MzkwNSBDMjAuOTcxOTA4NiwtOS4wOTU2NDg4NyAyOS4wNjQwNDIyLC0xNC4wOTA3MzkgNDAuOTI2Mjk2MSwtMTQuMDkwNzM5IFogTTQwLjkyNjI5NjEsNjUuOTA2ODA2MiBDMjkuMDY0MDQyMiw2NS45MDY4MDYyIDIwLjk3MTkwODYsNjAuOTExNzE2MSAxNi45MTQxMDg2LDU3LjkwNjgwNjIgQzE1LjM1Nzc5ODgsNTYuNzU0MzE3IDE1LjczMjU5NjQsNTMuNzc2NTYzOCAxNi45MTQxMDg2LDUyLjU4Nzk0OTQgQzE4LjA5NTYyMDgsNTEuMzk5MzM1MSAyMC42MTQxMzY5LDUwLjc1MDEyNTkgMjIuNDQ2NDAwOSw1Mi4wMjU3MjQ0IEMyNC4zNDY5MDc3LDUzLjM0ODgzMjcgMzAuODk3NzAzOCw1Ny45MDY4MDYyIDQwLjkyNjI5NjEsNTcuOTA2ODA2MiBDNTAuOTU0ODg4NSw1Ny45MDY4MDYyIDU3LjQzNzMxNDQsNTMuMzU5NjU1MSA1OS40MDk5MzY0LDUyLjAyNTcyNDQgQzYxLjA2MDEwMzksNTAuOTA5ODQ0NCA2My42Njg0NzQ2LDUxLjI1NzQ1OTUgNjQuOTEyNzg4Myw1Mi41ODc5NDk0IEM2Ni4xNTcxMDIsNTMuOTE4NDM5MyA2Ni4zNzY0NDQ0LDU2Ljc3MzA4NzYgNjQuOTEyNzg4Myw1Ny45MDY4MDYyIEM2MS4yNzk1MjcxLDYwLjcyMTA1NzMgNTIuNzg4NTUwMSw2NS45MDY4MDYyIDQwLjkyNjI5NjEsNjUuOTA2ODA2MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjkwNjI5OCwgMjUuOTA4MDM0KSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC00MC45MDYyOTgsIC0yNS45MDgwMzQpICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
};

const part2Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(700deg);
  }
  85% {
    transform: rotate(2600deg);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const SpinnerPart2 = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  animation-iteration-count: infinite;
  animation-name: ${part2Animation};
  animation-duration: 7s;
`;

SpinnerPart2.defaultProps = {
  src:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTExcHgiIGhlaWdodD0iNzRweCIgdmlld0JveD0iMCAwIDExMSA3NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNCAoNjczNzgpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmltZ18wMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJIb21lcGFnZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImltZ18wMiIgZmlsbD0iI0YwOTIzNSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIwLjM3NDcwOTMsLTUuMTg2NTAxIEMyMy4zNjc0NDUxLC03LjcyMzM0MjQ4IDM2LjAwMjEyMDcsLTE3Ljk2MTk3NTcgNTUuNjQwNzg1MSwtMTcuOTYxOTc1NyBDNzUuMjc5NDQ5NiwtMTcuOTYxOTc1NyA4Ni44NTgyNDQ4LC04LjI5MTM4MzYxIDkwLjg3MzUwNDMsLTUuMTg2NTAxIEM5Mi40NjQwMDI5LC0zLjk1NjYxNDk3IDkxLjkzMTcwODcsLTAuNjA2NDQ0MDEyIDkwLjg3MzUwNDMsMC40NTcyNzM0NTUgQzg5LjgxNTI5OTksMS41MjA5OTA5MiA4Ny4wMDc4NDE2LDIuMzA3ODM1NzIgODUuMjU4MjkxMywwLjg0NzYxNDM1MyBDODIuMTYxMjQyNywtMS43MzcyNjQ4OCA3MS44MDMwOTEzLC05Ljk2Mzk1NjA5IDU1LjY0MDc4NTEsLTkuOTYzOTU2MDkgQzM5LjQ3ODQ3OSwtOS45NjM5NTYwOSAyOC43OTQ5NzQxLC0xLjUzODIzNDMxIDI2LjA2NTA1OTIsMC44NDc2MTQzNTMgQzI0LjUwNTQwODUsMi4yMTA2OTM2MiAyMS42MzM1NDE0LDEuNjk4ODUwOTcgMjAuMzc0NzA5MywwLjQ1NzI3MzQ1NSBDMTkuMTE1ODc3MywtMC43ODQzMDQwNjEgMTguNzMwODcyLC0zLjc5MzA3NTQxIDIwLjM3NDcwOTMsLTUuMTg2NTAxIFogTTIwLjM3NDcwOTMsNzguODgyMzA3NSBDMTguNzMwODcyLDc3LjQ4ODg4MTkgMTkuMTE1ODc3Myw3NC40ODAxMTA2IDIwLjM3NDcwOTMsNzMuMjM4NTMzMSBDMjEuNjMzNTQxNCw3MS45OTY5NTU2IDI0LjUwNTQwODUsNzEuNDg1MTEyOSAyNi4wNjUwNTkyLDcyLjg0ODE5MjIgQzI4Ljc5NDk3NDEsNzUuMjM0MDQwOCAzOS40Nzg0NzksODMuNjU5NzYyNiA1NS42NDA3ODUxLDgzLjY1OTc2MjYgQzcxLjgwMzA5MTMsODMuNjU5NzYyNiA4Mi4xNjEyNDI3LDc1LjQzMzA3MTQgODUuMjU4MjkxMyw3Mi44NDgxOTIyIEM4Ny4wMDc4NDE2LDcxLjM4Nzk3MDggODkuODE1Mjk5OSw3Mi4xNzQ4MTU2IDkwLjg3MzUwNDMsNzMuMjM4NTMzMSBDOTEuOTMxNzA4Nyw3NC4zMDIyNTA1IDkyLjQ2NDAwMjksNzcuNjUyNDIxNSA5MC44NzM1MDQzLDc4Ljg4MjMwNzUgQzg2Ljg1ODI0NDgsODEuOTg3MTkwMSA3NS4yNzk0NDk2LDkxLjY1Nzc4MjIgNTUuNjQwNzg1MSw5MS42NTc3ODIyIEMzNi4wMDIxMjA3LDkxLjY1Nzc4MjIgMjMuMzY3NDQ1MSw4MS40MTkxNDkgMjAuMzc0NzA5Myw3OC44ODIzMDc1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUuNTc5MDMyLCAzNi44NDc5MDMpIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTU1LjU3OTAzMiwgLTM2Ljg0NzkwMykgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
};
