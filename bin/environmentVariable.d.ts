import * as pulumi from "@pulumi/pulumi";
export declare class EnvironmentVariable extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentVariableState, opts?: pulumi.CustomResourceOptions): EnvironmentVariable;
    /**
     * Returns true if the given object is an instance of EnvironmentVariable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EnvironmentVariable;
    /**
     * Backend URL of the deployment, as reported by `convex_deployment.deployment_url`. Use that attribute rather than building the URL from the deployment name: regional deployments look like `https://calm-cow-456.eu-west-1.convex.cloud`. Changing this forces a new resource.
     */
    readonly deploymentUrl: pulumi.Output<string>;
    /**
     * Name of the environment variable, for example `STRIPE_KEY`. Changing this forces a new resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Value of the environment variable. Marked sensitive, since these commonly hold credentials; note that the value is stored in Terraform state either way. Can be changed in place.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a EnvironmentVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentVariableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EnvironmentVariable resources.
 */
export interface EnvironmentVariableState {
    /**
     * Backend URL of the deployment, as reported by `convex_deployment.deployment_url`. Use that attribute rather than building the URL from the deployment name: regional deployments look like `https://calm-cow-456.eu-west-1.convex.cloud`. Changing this forces a new resource.
     */
    deploymentUrl?: pulumi.Input<string>;
    /**
     * Name of the environment variable, for example `STRIPE_KEY`. Changing this forces a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the environment variable. Marked sensitive, since these commonly hold credentials; note that the value is stored in Terraform state either way. Can be changed in place.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EnvironmentVariable resource.
 */
export interface EnvironmentVariableArgs {
    /**
     * Backend URL of the deployment, as reported by `convex_deployment.deployment_url`. Use that attribute rather than building the URL from the deployment name: regional deployments look like `https://calm-cow-456.eu-west-1.convex.cloud`. Changing this forces a new resource.
     */
    deploymentUrl: pulumi.Input<string>;
    /**
     * Name of the environment variable, for example `STRIPE_KEY`. Changing this forces a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Value of the environment variable. Marked sensitive, since these commonly hold credentials; note that the value is stored in Terraform state either way. Can be changed in place.
     */
    value: pulumi.Input<string>;
}
