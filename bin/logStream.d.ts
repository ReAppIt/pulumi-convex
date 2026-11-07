import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class LogStream extends pulumi.CustomResource {
    /**
     * Get an existing LogStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogStreamState, opts?: pulumi.CustomResourceOptions): LogStream;
    /**
     * Returns true if the given object is an instance of LogStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LogStream;
    /**
     * Stream to an Axiom dataset.
     */
    readonly axiom: pulumi.Output<outputs.LogStreamAxiom | undefined>;
    /**
     * Stream to Datadog.
     */
    readonly datadog: pulumi.Output<outputs.LogStreamDatadog | undefined>;
    /**
     * Backend URL of the deployment, as reported by `convex_deployment.deployment_url`. Changing this forces a new resource.
     */
    readonly deploymentUrl: pulumi.Output<string>;
    /**
     * Route exceptions to PostHog error tracking.
     */
    readonly posthogErrorTracking: pulumi.Output<outputs.LogStreamPosthogErrorTracking | undefined>;
    /**
     * Stream logs to PostHog.
     */
    readonly posthogLogs: pulumi.Output<outputs.LogStreamPosthogLogs | undefined>;
    /**
     * Route exceptions to Sentry.
     */
    readonly sentry: pulumi.Output<outputs.LogStreamSentry | undefined>;
    /**
     * Current state: <span pulumi-lang-nodejs="`pending`" pulumi-lang-dotnet="`Pending`" pulumi-lang-go="`pending`" pulumi-lang-python="`pending`" pulumi-lang-yaml="`pending`" pulumi-lang-java="`pending`" pulumi-lang-hcl="`pending`">`pending`</span>, <span pulumi-lang-nodejs="`restarting`" pulumi-lang-dotnet="`Restarting`" pulumi-lang-go="`restarting`" pulumi-lang-python="`restarting`" pulumi-lang-yaml="`restarting`" pulumi-lang-java="`restarting`" pulumi-lang-hcl="`restarting`">`restarting`</span>, <span pulumi-lang-nodejs="`active`" pulumi-lang-dotnet="`Active`" pulumi-lang-go="`active`" pulumi-lang-python="`active`" pulumi-lang-yaml="`active`" pulumi-lang-java="`active`" pulumi-lang-hcl="`active`">`active`</span>, <span pulumi-lang-nodejs="`failed`" pulumi-lang-dotnet="`Failed`" pulumi-lang-go="`failed`" pulumi-lang-python="`failed`" pulumi-lang-yaml="`failed`" pulumi-lang-java="`failed`" pulumi-lang-hcl="`failed`">`failed`</span> or <span pulumi-lang-nodejs="`deleting`" pulumi-lang-dotnet="`Deleting`" pulumi-lang-go="`deleting`" pulumi-lang-python="`deleting`" pulumi-lang-yaml="`deleting`" pulumi-lang-java="`deleting`" pulumi-lang-hcl="`deleting`">`deleting`</span>. Set by Convex, so it changes outside Terraform.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Why the stream failed, when <span pulumi-lang-nodejs="`status`" pulumi-lang-dotnet="`Status`" pulumi-lang-go="`status`" pulumi-lang-python="`status`" pulumi-lang-yaml="`status`" pulumi-lang-java="`status`" pulumi-lang-hcl="`status`">`status`</span> is <span pulumi-lang-nodejs="`failed`" pulumi-lang-dotnet="`Failed`" pulumi-lang-go="`failed`" pulumi-lang-python="`failed`" pulumi-lang-yaml="`failed`" pulumi-lang-java="`failed`" pulumi-lang-hcl="`failed`">`failed`</span>. Null otherwise.
     */
    readonly statusReason: pulumi.Output<string>;
    /**
     * Stream to an arbitrary URL by POST.
     */
    readonly webhook: pulumi.Output<outputs.LogStreamWebhook | undefined>;
    /**
     * Create a LogStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogStreamArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LogStream resources.
 */
export interface LogStreamState {
    /**
     * Stream to an Axiom dataset.
     */
    axiom?: pulumi.Input<inputs.LogStreamAxiom>;
    /**
     * Stream to Datadog.
     */
    datadog?: pulumi.Input<inputs.LogStreamDatadog>;
    /**
     * Backend URL of the deployment, as reported by `convex_deployment.deployment_url`. Changing this forces a new resource.
     */
    deploymentUrl?: pulumi.Input<string>;
    /**
     * Route exceptions to PostHog error tracking.
     */
    posthogErrorTracking?: pulumi.Input<inputs.LogStreamPosthogErrorTracking>;
    /**
     * Stream logs to PostHog.
     */
    posthogLogs?: pulumi.Input<inputs.LogStreamPosthogLogs>;
    /**
     * Route exceptions to Sentry.
     */
    sentry?: pulumi.Input<inputs.LogStreamSentry>;
    /**
     * Current state: <span pulumi-lang-nodejs="`pending`" pulumi-lang-dotnet="`Pending`" pulumi-lang-go="`pending`" pulumi-lang-python="`pending`" pulumi-lang-yaml="`pending`" pulumi-lang-java="`pending`" pulumi-lang-hcl="`pending`">`pending`</span>, <span pulumi-lang-nodejs="`restarting`" pulumi-lang-dotnet="`Restarting`" pulumi-lang-go="`restarting`" pulumi-lang-python="`restarting`" pulumi-lang-yaml="`restarting`" pulumi-lang-java="`restarting`" pulumi-lang-hcl="`restarting`">`restarting`</span>, <span pulumi-lang-nodejs="`active`" pulumi-lang-dotnet="`Active`" pulumi-lang-go="`active`" pulumi-lang-python="`active`" pulumi-lang-yaml="`active`" pulumi-lang-java="`active`" pulumi-lang-hcl="`active`">`active`</span>, <span pulumi-lang-nodejs="`failed`" pulumi-lang-dotnet="`Failed`" pulumi-lang-go="`failed`" pulumi-lang-python="`failed`" pulumi-lang-yaml="`failed`" pulumi-lang-java="`failed`" pulumi-lang-hcl="`failed`">`failed`</span> or <span pulumi-lang-nodejs="`deleting`" pulumi-lang-dotnet="`Deleting`" pulumi-lang-go="`deleting`" pulumi-lang-python="`deleting`" pulumi-lang-yaml="`deleting`" pulumi-lang-java="`deleting`" pulumi-lang-hcl="`deleting`">`deleting`</span>. Set by Convex, so it changes outside Terraform.
     */
    status?: pulumi.Input<string>;
    /**
     * Why the stream failed, when <span pulumi-lang-nodejs="`status`" pulumi-lang-dotnet="`Status`" pulumi-lang-go="`status`" pulumi-lang-python="`status`" pulumi-lang-yaml="`status`" pulumi-lang-java="`status`" pulumi-lang-hcl="`status`">`status`</span> is <span pulumi-lang-nodejs="`failed`" pulumi-lang-dotnet="`Failed`" pulumi-lang-go="`failed`" pulumi-lang-python="`failed`" pulumi-lang-yaml="`failed`" pulumi-lang-java="`failed`" pulumi-lang-hcl="`failed`">`failed`</span>. Null otherwise.
     */
    statusReason?: pulumi.Input<string>;
    /**
     * Stream to an arbitrary URL by POST.
     */
    webhook?: pulumi.Input<inputs.LogStreamWebhook>;
}
/**
 * The set of arguments for constructing a LogStream resource.
 */
export interface LogStreamArgs {
    /**
     * Stream to an Axiom dataset.
     */
    axiom?: pulumi.Input<inputs.LogStreamAxiom>;
    /**
     * Stream to Datadog.
     */
    datadog?: pulumi.Input<inputs.LogStreamDatadog>;
    /**
     * Backend URL of the deployment, as reported by `convex_deployment.deployment_url`. Changing this forces a new resource.
     */
    deploymentUrl: pulumi.Input<string>;
    /**
     * Route exceptions to PostHog error tracking.
     */
    posthogErrorTracking?: pulumi.Input<inputs.LogStreamPosthogErrorTracking>;
    /**
     * Stream logs to PostHog.
     */
    posthogLogs?: pulumi.Input<inputs.LogStreamPosthogLogs>;
    /**
     * Route exceptions to Sentry.
     */
    sentry?: pulumi.Input<inputs.LogStreamSentry>;
    /**
     * Stream to an arbitrary URL by POST.
     */
    webhook?: pulumi.Input<inputs.LogStreamWebhook>;
}
