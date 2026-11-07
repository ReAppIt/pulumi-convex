import * as pulumi from "@pulumi/pulumi";
export declare class CustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing CustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomDomainState, opts?: pulumi.CustomResourceOptions): CustomDomain;
    /**
     * Returns true if the given object is an instance of CustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomDomain;
    /**
     * Creation timestamp, in milliseconds since the Unix epoch.
     */
    readonly creationTime: pulumi.Output<number>;
    /**
     * Name of the deployment the domain points at, such as `playful-otter-123`. Changing this forces a new resource.
     */
    readonly deploymentName: pulumi.Output<string>;
    /**
     * The custom domain itself, for example `api.example.com`. Changing this forces a new resource.
     */
    readonly domain: pulumi.Output<string>;
    /**
     * Which endpoint the domain serves. `convexCloud` fronts the deployment's `.convex.cloud` API URL; `convexSite` fronts its `.convex.site` HTTP actions URL. A deployment can have one domain registered for each. Changing this forces a new resource.
     */
    readonly requestDestination: pulumi.Output<string>;
    /**
     * Timestamp in milliseconds at which Convex verified the domain, or null while it is still unverified. This is set outside Terraform, once DNS resolves.
     */
    readonly verificationTime: pulumi.Output<number>;
    /**
     * Whether Convex has verified the domain. A convenience for <span pulumi-lang-nodejs="`verificationTime " pulumi-lang-dotnet="`VerificationTime " pulumi-lang-go="`verificationTime " pulumi-lang-python="`verification_time " pulumi-lang-yaml="`verificationTime " pulumi-lang-java="`verificationTime " pulumi-lang-hcl="`verification_time ">`verificationTime </span>!= null`; false on a freshly created domain.
     */
    readonly verified: pulumi.Output<boolean>;
    /**
     * Create a CustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomDomainArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CustomDomain resources.
 */
export interface CustomDomainState {
    /**
     * Creation timestamp, in milliseconds since the Unix epoch.
     */
    creationTime?: pulumi.Input<number>;
    /**
     * Name of the deployment the domain points at, such as `playful-otter-123`. Changing this forces a new resource.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * The custom domain itself, for example `api.example.com`. Changing this forces a new resource.
     */
    domain?: pulumi.Input<string>;
    /**
     * Which endpoint the domain serves. `convexCloud` fronts the deployment's `.convex.cloud` API URL; `convexSite` fronts its `.convex.site` HTTP actions URL. A deployment can have one domain registered for each. Changing this forces a new resource.
     */
    requestDestination?: pulumi.Input<string>;
    /**
     * Timestamp in milliseconds at which Convex verified the domain, or null while it is still unverified. This is set outside Terraform, once DNS resolves.
     */
    verificationTime?: pulumi.Input<number>;
    /**
     * Whether Convex has verified the domain. A convenience for <span pulumi-lang-nodejs="`verificationTime " pulumi-lang-dotnet="`VerificationTime " pulumi-lang-go="`verificationTime " pulumi-lang-python="`verification_time " pulumi-lang-yaml="`verificationTime " pulumi-lang-java="`verificationTime " pulumi-lang-hcl="`verification_time ">`verificationTime </span>!= null`; false on a freshly created domain.
     */
    verified?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a CustomDomain resource.
 */
export interface CustomDomainArgs {
    /**
     * Name of the deployment the domain points at, such as `playful-otter-123`. Changing this forces a new resource.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * The custom domain itself, for example `api.example.com`. Changing this forces a new resource.
     */
    domain: pulumi.Input<string>;
    /**
     * Which endpoint the domain serves. `convexCloud` fronts the deployment's `.convex.cloud` API URL; `convexSite` fronts its `.convex.site` HTTP actions URL. A deployment can have one domain registered for each. Changing this forces a new resource.
     */
    requestDestination: pulumi.Input<string>;
}
