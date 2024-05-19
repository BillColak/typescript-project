// import {fetchAPI} from "@/lib/actions";


export async function GET(request: Request) {

  // const response = await fetchAPI({
  //   endpoint: request.url.toString(),
  //   // token: bearer_token,
  //   method: 'GET',
  // })
  // let data = await response.json()
  // return new Response(JSON.stringify(data), {
  //   headers: {
  //     "content-type": "application/json;charset=UTF-8",
  //   },
  // })
}

export async function POST(request: Request) {
  return new Response('POST request')
}

export async function DELETE(request: Request) {
  return new Response('DELETE request')
}

export async function PATCH(request: Request) {
  return new Response('PATCH request')
}
