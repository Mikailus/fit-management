import { LoaderService } from './loader.service';

export function showLoader(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const loaderService: LoaderService = new LoaderService();
    const method: Function = descriptor.value;
    descriptor.value = function() {
        loaderService.showLoader();
        return method.apply(this, arguments)
            .then((v: any) => {
                loaderService.hideLoader();
                return v;
            })
            .catch((err: any) => {
                loaderService.hideLoader();
                return Promise.reject(err);
            });
    }
}