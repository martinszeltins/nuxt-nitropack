import type { NitroFetchRequest, AvailableRouterMethod as _AvailableRouterMethod, InternalApi } from 'nitropack'

type _InternalApi = InternalApi
type ApiStatus = 'start' | 'success' | 'error' | 'end'
type AvailableRouterMethod<R extends NitroFetchRequest> = _AvailableRouterMethod<R> | Uppercase<_AvailableRouterMethod<R>>

export type {
    ApiStatus,
    _InternalApi,
    AvailableRouterMethod,
}

