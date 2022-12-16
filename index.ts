import 'reflect-metadata'

import { OrderRoute } from '@infra/routes/OrderRoute'
import { app as expressApp } from '@infra/main/App'
import { PORT } from '@configs/Defaults'
import { Route } from '@interfaces/Route'
import { App } from 'src/App'

const routes: Route[] = [new OrderRoute()]

const app = new App(expressApp, PORT, routes)

app.initApp()
