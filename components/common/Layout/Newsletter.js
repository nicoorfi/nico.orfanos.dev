export default function Newsletter() {
    return (
        <div>
            <form action="https://www.getrevue.co/profile/nicoorfi/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                <div className="revue-form-group">
                    <label htmlFor="member_email">Email address</label>
                    <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
                </div>
                <div className="revue-form-actions">
                    <input type="submit" defaultValue="Subscribe" name="member[subscribe]" id="member_submit" />
                </div>
                <div className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
            </form>
        </div>
    );
}

