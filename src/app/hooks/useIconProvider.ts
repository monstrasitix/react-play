export default (providers: any) => (type: string) => (
    providers[type]
);