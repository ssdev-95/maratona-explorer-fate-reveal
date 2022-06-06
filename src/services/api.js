import { create } from 'axios'

const  baseURL = 'http://staging.quotable.io'

export const api = create({ baseURL })
