import styled from 'styled-components';
import { Flex } from 'rebass';
import theme from 'theme';

const PageLayoutContainer = styled(Flex)`
  background-image: url('https://sol1.casino/images/main-banner/cashback-bg.jpg');
  background-repeat: no-repeat;
  position: relative;
`;

export const Overlay = styled.div`
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTkxOXB4IiBoZWlnaHQ9IjcwMHB4IiB2aWV3Qm94PSIwIDAgMTkxOSA3MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1Mi41ICg2NzQ2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+REU3MkQyOUEtNjI5NC00MjQwLTkwNkUtNkVBNkIxQkREMjdEPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyYWRpYWxHcmFkaWVudCBjeD0iNjYuMDc1NDU3OCUiIGN5PSI1LjAzODEzODQ1JSIgZng9IjY2LjA3NTQ1NzglIiBmeT0iNS4wMzgxMzg0NSUiIHI9IjE4OC4yMDg3NTglIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNjYwNzU1LDAuMDUwMzgxKSxzY2FsZSgwLjM2NDU4MywxLjAwMDAwMCkscm90YXRlKDE3Mi4xOTA0NzApLHNjYWxlKDEuMDAwMDAwLDAuNDkwMjY1KSx0cmFuc2xhdGUoLTAuNjYwNzU1LC0wLjA1MDM4MSkiIGlkPSJyYWRpYWxHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIxMUUxQyIgc3RvcC1vcGFjaXR5PSIwLjEzNjQzNTY4OCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMjExRTFDIiBzdG9wLW9wYWNpdHk9IjAuODY5MTY0MzQ5IiBvZmZzZXQ9IjgwLjAzNzgzNjIlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMTFFMUMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE5MjAiIGhlaWdodD0iNzAwIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iQmFubmVycyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxpdmUt0LTQuNC70LvQtdGA0YsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjAwMDAwMCwgLTYwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iMDEtSGVyby1zbGlkZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJCRy1CbG9jayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0xNjguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik92ZXJsYXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxNjguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTMiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iQkctb3ZlcmxheSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
  background-repeat: no-repeat;
  position: relative;
  position: absolute;
  width: 100%;
  height: 50%;
`;

PageLayoutContainer.defaultProps = {
  flexDirection: 'column',
  alignItems: 'center',
  bg: 'layout',
  ml: [0, theme.sidebarWidth[1]],
  mt: theme.headerHeight,
  width: [1, `calc(100% - ${theme.sidebarWidth[1]}px)`]
};

export default PageLayoutContainer;
