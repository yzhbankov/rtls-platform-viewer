import { useEffect, useState } from 'react';

const userEmail = 'redpoint_positioning_impersonate@9RbFAAOwSc2hPvKyqDrkEA';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOjYwNDgwMCwidXNlciI6eyJ1aWQiOiJXVDhmMEYwU1RZbTdYbU4wanE4aV9nIiwicm9sZSI6ImNvbXBhbnkgYWRtaW4iLCJlbWFpbCI6InJlZHBvaW50X3Bvc2l0aW9uaW5nX2ltcGVyc29uYXRlQDlSYkZBQU93U2MyaFB2S3lxRHJrRUEiLCJwcm9qZWN0cyI6W3sicHJvamVjdF91aWQiOiJzSTJWWU95SVF5MmV0djRmZ29SeG9nIiwicHJvamVjdF9uYW1lIjoiUlBQIFVBIE9mZmljZSAoMikiLCJwcml2Ijo1fSx7InByb2plY3RfdWlkIjoiSVhDNDloZFhTcUdnTGVITmQwYUFuUSIsInByb2plY3RfbmFtZSI6IlJQUCBEaXN0cmljdCBPZmZpY2UiLCJwcml2Ijo1fSx7InByb2plY3RfdWlkIjoiV25FbllsOTZURnFGY1RtcFJFLVMzdyIsInByb2plY3RfbmFtZSI6IlBMUSIsInByaXYiOjV9LHsicHJvamVjdF91aWQiOiJLTjR4ak53eVNLQ0p4Ri1Ka1YwZVZnIiwicHJvamVjdF9uYW1lIjoiUExRMSIsInByaXYiOjV9LHsicHJvamVjdF91aWQiOiJpN2xPTlpQWlRNNmNJMDZidHl3ajBRIiwicHJvamVjdF9uYW1lIjoiUlBQIFVBIE9mZmljZSIsInByaXYiOjEzfSx7InByb2plY3RfdWlkIjoiU09tWmxlUGpRMGE4T1dtRW5RSGFMQSIsInByb2plY3RfbmFtZSI6Ik5ldyBkZW1vIHByb2plY3QiLCJwcml2IjoxM30seyJwcm9qZWN0X3VpZCI6IjJXeXVxOGMwVC1hdHdoRDlINmFTSUEiLCJwcm9qZWN0X25hbWUiOiJWb2xvZHlteXJQcm9qZWN0IiwicHJpdiI6MTN9LHsicHJvamVjdF91aWQiOiJCYlg0ZnVqaFI1bWlpZ0VjLTQ4VGpBIiwicHJvamVjdF9uYW1lIjoiTWFyeVByIiwicHJpdiI6MTN9LHsicHJvamVjdF91aWQiOiJfeEVLWkhyR1I0S1VLVnRfYXZqT2tRIiwicHJvamVjdF9uYW1lIjoi5pmu5rSx6Iy2IiwicHJpdiI6MTN9LHsicHJvamVjdF91aWQiOiI0SXRYdFdWNFNCQ0ZvRkNqdWduTG13IiwicHJvamVjdF9uYW1lIjoiVGVzdFByb2plY3QiLCJwcml2IjoxM30seyJwcm9qZWN0X3VpZCI6ImM3OWlsRHJOVERxTWVfWGJqNDBiR1EiLCJwcm9qZWN0X25hbWUiOiJUZXN0UHJvamVjdENvcHkzMyIsInByaXYiOjEzfSx7InByb2plY3RfdWlkIjoic2dYZ2xwY1VSMld1N04yTVZBSVdRZyIsInByb2plY3RfbmFtZSI6IlJQUCBUZXN0IFBXUyIsInByaXYiOjEzfSx7InByb2plY3RfdWlkIjoiM2F4TUJONnFSc2U5UVdJSm1SbFB0USIsInByb2plY3RfbmFtZSI6InRzdCIsInByaXYiOjEzfSx7InByb2plY3RfdWlkIjoiekUyd2VESTBUY09PSFBZTFplVVZfdyIsInByb2plY3RfbmFtZSI6IkExIiwicHJpdiI6MTN9LHsicHJvamVjdF91aWQiOiJVMEp0X2VUY1QwZXExQjhDWmJkUzFBIiwicHJvamVjdF9uYW1lIjoiVGVtcCIsInByaXYiOjEzfSx7InByb2plY3RfdWlkIjoiRjBUUjVmbWNSU1d4YnpPdS13b2JVZyIsInByb2plY3RfbmFtZSI6IiEhISEhISEhISEhISErIiwicHJpdiI6MTN9XSwiYXV0aGVudGljYXRpb25fdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbGVIQnBjbVZ6U1c0aU9qRXdNelk0TURBd0xDSnBaQ0k2SW5ZMVZrUlZkUzFmVTJWZllrMUZkMHMyY0ZGVVFuY2lMQ0pwWVhRaU9qRTJNamswTmpFd05qaDkuUUQ2SktVTlJpN1N4WHhCU25sVjJ3b3VvbHgtQkFVMXU1eHN6NnR1cG1payIsImFkbWluIjoxLCJjb21wYW55X3VpZCI6IjlSYkZBQU93U2MyaFB2S3lxRHJrRUEiLCJzdGF0dXMiOiJBQ1RJVkUifSwiaWF0IjoxNjM4NzAxNzM1fQ.6ErDpoKQcNsXeVjfA_6FYWsvy-zAfGRw6NppRAV8L1o';
const projectUid = 'i7lONZPZTM6cI06btywj0Q';
const wsHost = 'wss://dev7.rpplabs.com/api/ws/';

// todo: add pos props
type Position = {
     x: number;
     y: number;
     dev_id: string;
}

type WsHook = {
     positions: {[key: string]: Position}
}

export function useWebSocket(): WsHook {
     const [positions, setPositions] = useState({});
     useEffect(() => {
          const ws = new WebSocket(wsHost);
          ws.addEventListener('open', (event) => {
               ws.send(JSON.stringify({
                    id: '8f4c20d846e02e9f03faec',
                    jsonrpc: '2.0',
                    method: 'add',
                    params: {
                         entity: 'subscriptions',
                         data: ['pos'],
                         project_uid: projectUid,
                         userEmail,
                         authToken,
                    }
               }));
          });
          ws.addEventListener('message', (event) => {
               const messageRaw = JSON.parse(event.data);
               if (messageRaw.method === 'notify' && messageRaw?.params.subscription === 'pos') {
                    const pos = messageRaw.params.data;
                    positions[pos.dev_id] = pos;
                    setPositions({ ...positions });
               }
          });
          return () => {
               ws.close();
          }
     }, []);

     return {
          positions,
     }
}
