import React from "react";

function HomePage() {
  return (
    <main className="center" id="main">
      <div className="page-area">
        <section aria-roledescription="Stay on Track">
          <article>
            <h1>Stay on track</h1>
            <p>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that! We'll show you the budgets you've allocated and the expenses that you've
              accumulated throughout the month!
            </p>
          </article>
        </section>

        <section aria-roledescription="Commitment">
          <article>
            <h1>Commitment</h1>
            <p>
              It's difficult to stay committed to a budget plan. But it doesn't have to be that way!
              Once you break down your budgets, you'll see how simple and feasible it is
              to be responsible! Join the many others who are now more comfortable and
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </p>
          </article>

          <article aria-roledescription="Free Application">
            <h1>Free</h1>
            <p>
              This app is free!!! And you are the only one holding your data! There's already so much
              to worry about with your finances so we won't add to it! We're only here to help you out.
            </p>
          </article>
        </section>

        <section aria-roledescription="Awareness">
          <article>
            <h1>Awareness</h1>
            <p>
              If you don't really know where your money is being spent, you're not alone! Most often,
              people get surprised as their spending habits so you're not alone! Proper budget
              management depends on real data... and this app will help you with
              that! With automatic updates about the savings you've made to encourage you further!
            </p>
          </article>

          <article aria-roledescription="Alerts">
            <h1>Alerts</h1>
            <p>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget and keep you updated on how
              your finance management is going. Let's get you to save as much as
              you can!
            </p>
          </article>
        </section>

        <article aria-roledescription="Results">
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get
            out of debt faster! Also, they to live happier lives... since they
            expend without guilt or fear... because they know it is all good and
            accounted for.
          </p>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
