import * as pulumi from "@pulumi/pulumi";
export declare class DeployKey extends pulumi.CustomResource {
    /**
     * Get an existing DeployKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeployKeyState, opts?: pulumi.CustomResourceOptions): DeployKey;
    /**
     * Returns true if the given object is an instance of DeployKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DeployKey;
    /**
     * Actions the key is allowed to perform, for example `deployment:deploy`. Defaults to whatever Convex grants a key created without restrictions. Changing this forces a new key.
     */
    readonly allowedActions: pulumi.Output<string[]>;
    /**
     * Creation timestamp, in milliseconds since the Unix epoch.
     */
    readonly creationTime: pulumi.Output<number>;
    /**
     * Numeric member ID of whoever created the key.
     */
    readonly creator: pulumi.Output<number>;
    /**
     * Stable numeric identifier of the deploy key.
     */
    readonly deployKeyId: pulumi.Output<number>;
    /**
     * Name of the deployment the key grants access to, such as `playful-otter-123`. Changing this forces a new key.
     */
    readonly deploymentName: pulumi.Output<string>;
    /**
     * Timestamp in milliseconds at which the key expires. Must be at least 30 minutes in the future. Changing this forces a new key.
     */
    readonly expiresAt: pulumi.Output<number>;
    /**
     * The generated deploy key. Available only on the apply that creates it; an imported key has this set to null, because Convex cannot return it again.
     */
    readonly key: pulumi.Output<string>;
    /**
     * Timestamp of the last use of this key, or null if it has never been used. Changes outside Terraform whenever the key is used.
     */
    readonly lastUsedTime: pulumi.Output<number>;
    /**
     * Name of the deploy key. Must be unique within the deployment, since the API uses it as an identifier. Changing this forces a new key.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a DeployKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeployKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DeployKey resources.
 */
export interface DeployKeyState {
    /**
     * Actions the key is allowed to perform, for example `deployment:deploy`. Defaults to whatever Convex grants a key created without restrictions. Changing this forces a new key.
     */
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Creation timestamp, in milliseconds since the Unix epoch.
     */
    creationTime?: pulumi.Input<number>;
    /**
     * Numeric member ID of whoever created the key.
     */
    creator?: pulumi.Input<number>;
    /**
     * Stable numeric identifier of the deploy key.
     */
    deployKeyId?: pulumi.Input<number>;
    /**
     * Name of the deployment the key grants access to, such as `playful-otter-123`. Changing this forces a new key.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * Timestamp in milliseconds at which the key expires. Must be at least 30 minutes in the future. Changing this forces a new key.
     */
    expiresAt?: pulumi.Input<number>;
    /**
     * The generated deploy key. Available only on the apply that creates it; an imported key has this set to null, because Convex cannot return it again.
     */
    key?: pulumi.Input<string>;
    /**
     * Timestamp of the last use of this key, or null if it has never been used. Changes outside Terraform whenever the key is used.
     */
    lastUsedTime?: pulumi.Input<number>;
    /**
     * Name of the deploy key. Must be unique within the deployment, since the API uses it as an identifier. Changing this forces a new key.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DeployKey resource.
 */
export interface DeployKeyArgs {
    /**
     * Actions the key is allowed to perform, for example `deployment:deploy`. Defaults to whatever Convex grants a key created without restrictions. Changing this forces a new key.
     */
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the deployment the key grants access to, such as `playful-otter-123`. Changing this forces a new key.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Timestamp in milliseconds at which the key expires. Must be at least 30 minutes in the future. Changing this forces a new key.
     */
    expiresAt?: pulumi.Input<number>;
    /**
     * Name of the deploy key. Must be unique within the deployment, since the API uses it as an identifier. Changing this forces a new key.
     */
    name?: pulumi.Input<string>;
}
