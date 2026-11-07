import * as pulumi from "@pulumi/pulumi";
export declare class PreviewDeployKey extends pulumi.CustomResource {
    /**
     * Get an existing PreviewDeployKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PreviewDeployKeyState, opts?: pulumi.CustomResourceOptions): PreviewDeployKey;
    /**
     * Returns true if the given object is an instance of PreviewDeployKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PreviewDeployKey;
    /**
     * Actions the key is allowed to perform. Preview deploy keys are not configurable in this respect, so this reports whatever Convex granted.
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
     * Timestamp in milliseconds at which the key expires. Must be at least 30 minutes in the future. Changing this forces a new key.
     */
    readonly expiresAt: pulumi.Output<number>;
    /**
     * The generated preview deploy key. Available only on the apply that creates it; an imported key has this set to null.
     */
    readonly key: pulumi.Output<string>;
    /**
     * Timestamp of the last use of this key, or null if it has never been used. Changes outside Terraform whenever the key is used.
     */
    readonly lastUsedTime: pulumi.Output<number>;
    /**
     * Name of the preview deploy key. Must be unique within the project, since the API uses it as an identifier. Changing this forces a new key.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Stable numeric identifier of the preview deploy key.
     */
    readonly previewDeployKeyId: pulumi.Output<number>;
    /**
     * Numeric identifier of the project the key belongs to. Changing this forces a new key.
     */
    readonly projectId: pulumi.Output<number>;
    /**
     * Create a PreviewDeployKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PreviewDeployKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PreviewDeployKey resources.
 */
export interface PreviewDeployKeyState {
    /**
     * Actions the key is allowed to perform. Preview deploy keys are not configurable in this respect, so this reports whatever Convex granted.
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
     * Timestamp in milliseconds at which the key expires. Must be at least 30 minutes in the future. Changing this forces a new key.
     */
    expiresAt?: pulumi.Input<number>;
    /**
     * The generated preview deploy key. Available only on the apply that creates it; an imported key has this set to null.
     */
    key?: pulumi.Input<string>;
    /**
     * Timestamp of the last use of this key, or null if it has never been used. Changes outside Terraform whenever the key is used.
     */
    lastUsedTime?: pulumi.Input<number>;
    /**
     * Name of the preview deploy key. Must be unique within the project, since the API uses it as an identifier. Changing this forces a new key.
     */
    name?: pulumi.Input<string>;
    /**
     * Stable numeric identifier of the preview deploy key.
     */
    previewDeployKeyId?: pulumi.Input<number>;
    /**
     * Numeric identifier of the project the key belongs to. Changing this forces a new key.
     */
    projectId?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a PreviewDeployKey resource.
 */
export interface PreviewDeployKeyArgs {
    /**
     * Timestamp in milliseconds at which the key expires. Must be at least 30 minutes in the future. Changing this forces a new key.
     */
    expiresAt?: pulumi.Input<number>;
    /**
     * Name of the preview deploy key. Must be unique within the project, since the API uses it as an identifier. Changing this forces a new key.
     */
    name?: pulumi.Input<string>;
    /**
     * Numeric identifier of the project the key belongs to. Changing this forces a new key.
     */
    projectId: pulumi.Input<number>;
}
