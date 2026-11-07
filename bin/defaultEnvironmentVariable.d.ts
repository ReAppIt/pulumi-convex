import * as pulumi from "@pulumi/pulumi";
export declare class DefaultEnvironmentVariable extends pulumi.CustomResource {
    /**
     * Get an existing DefaultEnvironmentVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultEnvironmentVariableState, opts?: pulumi.CustomResourceOptions): DefaultEnvironmentVariable;
    /**
     * Returns true if the given object is an instance of DefaultEnvironmentVariable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DefaultEnvironmentVariable;
    /**
     * Deployment type the default applies to: <span pulumi-lang-nodejs="`dev`" pulumi-lang-dotnet="`Dev`" pulumi-lang-go="`dev`" pulumi-lang-python="`dev`" pulumi-lang-yaml="`dev`" pulumi-lang-java="`dev`" pulumi-lang-hcl="`dev`">`dev`</span>, <span pulumi-lang-nodejs="`prod`" pulumi-lang-dotnet="`Prod`" pulumi-lang-go="`prod`" pulumi-lang-python="`prod`" pulumi-lang-yaml="`prod`" pulumi-lang-java="`prod`" pulumi-lang-hcl="`prod`">`prod`</span>, <span pulumi-lang-nodejs="`preview`" pulumi-lang-dotnet="`Preview`" pulumi-lang-go="`preview`" pulumi-lang-python="`preview`" pulumi-lang-yaml="`preview`" pulumi-lang-java="`preview`" pulumi-lang-hcl="`preview`">`preview`</span> or <span pulumi-lang-nodejs="`custom`" pulumi-lang-dotnet="`Custom`" pulumi-lang-go="`custom`" pulumi-lang-python="`custom`" pulumi-lang-yaml="`custom`" pulumi-lang-java="`custom`" pulumi-lang-hcl="`custom`">`custom`</span>. The same variable name can carry a different value per type, so this is part of the resource's identity. Changing it forces a new resource.
     */
    readonly deploymentType: pulumi.Output<string>;
    /**
     * Name of the environment variable, for example `SENTRY_DSN`. Changing this forces a new resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Numeric identifier of the project. Changing this forces a new resource.
     */
    readonly projectId: pulumi.Output<number>;
    /**
     * Value of the environment variable. Marked sensitive, since these commonly hold credentials; note that the value is stored in Terraform state either way. Can be changed in place.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a DefaultEnvironmentVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultEnvironmentVariableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DefaultEnvironmentVariable resources.
 */
export interface DefaultEnvironmentVariableState {
    /**
     * Deployment type the default applies to: <span pulumi-lang-nodejs="`dev`" pulumi-lang-dotnet="`Dev`" pulumi-lang-go="`dev`" pulumi-lang-python="`dev`" pulumi-lang-yaml="`dev`" pulumi-lang-java="`dev`" pulumi-lang-hcl="`dev`">`dev`</span>, <span pulumi-lang-nodejs="`prod`" pulumi-lang-dotnet="`Prod`" pulumi-lang-go="`prod`" pulumi-lang-python="`prod`" pulumi-lang-yaml="`prod`" pulumi-lang-java="`prod`" pulumi-lang-hcl="`prod`">`prod`</span>, <span pulumi-lang-nodejs="`preview`" pulumi-lang-dotnet="`Preview`" pulumi-lang-go="`preview`" pulumi-lang-python="`preview`" pulumi-lang-yaml="`preview`" pulumi-lang-java="`preview`" pulumi-lang-hcl="`preview`">`preview`</span> or <span pulumi-lang-nodejs="`custom`" pulumi-lang-dotnet="`Custom`" pulumi-lang-go="`custom`" pulumi-lang-python="`custom`" pulumi-lang-yaml="`custom`" pulumi-lang-java="`custom`" pulumi-lang-hcl="`custom`">`custom`</span>. The same variable name can carry a different value per type, so this is part of the resource's identity. Changing it forces a new resource.
     */
    deploymentType?: pulumi.Input<string>;
    /**
     * Name of the environment variable, for example `SENTRY_DSN`. Changing this forces a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Numeric identifier of the project. Changing this forces a new resource.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Value of the environment variable. Marked sensitive, since these commonly hold credentials; note that the value is stored in Terraform state either way. Can be changed in place.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DefaultEnvironmentVariable resource.
 */
export interface DefaultEnvironmentVariableArgs {
    /**
     * Deployment type the default applies to: <span pulumi-lang-nodejs="`dev`" pulumi-lang-dotnet="`Dev`" pulumi-lang-go="`dev`" pulumi-lang-python="`dev`" pulumi-lang-yaml="`dev`" pulumi-lang-java="`dev`" pulumi-lang-hcl="`dev`">`dev`</span>, <span pulumi-lang-nodejs="`prod`" pulumi-lang-dotnet="`Prod`" pulumi-lang-go="`prod`" pulumi-lang-python="`prod`" pulumi-lang-yaml="`prod`" pulumi-lang-java="`prod`" pulumi-lang-hcl="`prod`">`prod`</span>, <span pulumi-lang-nodejs="`preview`" pulumi-lang-dotnet="`Preview`" pulumi-lang-go="`preview`" pulumi-lang-python="`preview`" pulumi-lang-yaml="`preview`" pulumi-lang-java="`preview`" pulumi-lang-hcl="`preview`">`preview`</span> or <span pulumi-lang-nodejs="`custom`" pulumi-lang-dotnet="`Custom`" pulumi-lang-go="`custom`" pulumi-lang-python="`custom`" pulumi-lang-yaml="`custom`" pulumi-lang-java="`custom`" pulumi-lang-hcl="`custom`">`custom`</span>. The same variable name can carry a different value per type, so this is part of the resource's identity. Changing it forces a new resource.
     */
    deploymentType: pulumi.Input<string>;
    /**
     * Name of the environment variable, for example `SENTRY_DSN`. Changing this forces a new resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Numeric identifier of the project. Changing this forces a new resource.
     */
    projectId: pulumi.Input<number>;
    /**
     * Value of the environment variable. Marked sensitive, since these commonly hold credentials; note that the value is stored in Terraform state either way. Can be changed in place.
     */
    value: pulumi.Input<string>;
}
